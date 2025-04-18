// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

contract MoneyManagement {
    mapping(address => string) public userRoles;
    mapping(string => address payable) accounts;
    mapping(address => uint256) percentage;
    string[] names;
    uint remaning = 100;

    event PaymentReceived(address from, uint amount);

    function assignRole(address _user, string memory _role) public {
        userRoles[_user] = _role;
    }

    // Fallback function for payments (in Solidity 0.5.0 you must use fallback like this)
    function() external payable {
        emit PaymentReceived(msg.sender, msg.value);
        uint namesLength = names.length;
        for (uint i = 0; i < namesLength; i++) {
            address payable acc = accounts[names[i]];
            uint amount = (msg.value * percentage[acc]) / 100;
            acc.transfer(amount);
            emit PaymentReceived(acc, amount);
        }
    }

    function addAccount(address acc, string memory name, uint per) public returns (string memory, uint) {
        require(per > 0 && per <= remaning);
        accounts[name] = address(uint160(acc));
        percentage[acc] = per;
        remaning -= per;
        names.push(name);
        return (name, per);
    }

    function getAccountDetails(address acc) public view returns (string memory, uint) {
        string memory role = userRoles[acc];
        uint balance = acc.balance;
        return (role, balance);
    }

    function payRent() public payable {
        require(keccak256(abi.encodePacked(userRoles[msg.sender])) == keccak256(abi.encodePacked("Tenant")));
        address payable landlord = getLandlordAddress();
        landlord.transfer(msg.value);
        emit PaymentReceived(msg.sender, msg.value);
    }

    function withdrawDeposit() public {
        require(keccak256(abi.encodePacked(userRoles[msg.sender])) == keccak256(abi.encodePacked("Landlord")));
        uint256 amount = address(this).balance;
        msg.sender.transfer(amount);
        emit PaymentReceived(msg.sender, amount);
    }

    function getLandlordAddress() internal view returns (address payable) {
        return accounts["Landlord"];
    }

    function getNamesLength() public view returns (uint) {
        return names.length;
    }

    function getNames(uint i) public view returns (string memory) {
        require(i > 0 && i <= names.length);
        return names[i - 1];
    }

    function getAddress(uint i) public view returns (address) {
        require(i > 0 && i <= names.length);
        return accounts[names[i - 1]];
    }

    function getPercentage(uint i) public view returns (uint) {
        require(i > 0 && i <= names.length);
        return percentage[accounts[names[i - 1]]];
    }

    function getDetails(uint i) public view returns (string memory, address, uint) {
        require(i > 0 && i <= names.length);
        return (names[i - 1], accounts[names[i - 1]], percentage[accounts[names[i - 1]]]);
    }

    function stringsEqual(string storage _a, string memory _b) internal view returns (bool) {
        bytes storage a = bytes(_a);
        bytes memory b = bytes(_b);
        if (a.length != b.length) {
            return false;
        }
        for (uint i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
}


