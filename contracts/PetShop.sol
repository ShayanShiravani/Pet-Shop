// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract PetShop {

    address public owner;
    Branch[10] public branches;
    uint public newBranchId;

    event BranchAdded(address branch, uint id);

    struct Pet {
        uint id;
        string name;
        uint age;
        uint nationalID;
        address owner;
    }

    struct Branch {
        uint id;
        address owner;
        string location;
        string phoneNumber;
        Pet[] pets;
    }


    constructor() public {
        owner = msg.sender;
        newBranchId = 0;
        addBranch(msg.sender);
    }

    function addBranch(address branchAddress) public {
        require(msg.sender == owner);
        require(newBranchId < 10);
        branches[newBranchId].id = newBranchId + 1;
        branches[newBranchId].owner = branchAddress;
        newBranchId = newBranchId + 1;
        emit BranchAdded(branchAddress, newBranchId + 1);
    }

    function getBranches() public view returns (uint[] memory, address[] memory) {
        uint[] memory ids = new uint[](10);
        address[] memory addresses = new address[](10);
        for (uint i = 0; i < 10; i+=1) {
            ids[i] = branches[i].id;
            addresses[i] = branches[i].owner;
        }
        return (ids, addresses);
    }

}