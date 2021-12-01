// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract PetShop {

    address public owner;
    uint constant branchCap = 10;
    Branch[branchCap] public branches;
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
        string title;
        string location;
        string phoneNumber;
        Pet[] pets;
    }


    constructor() public {
        owner = msg.sender;
        newBranchId = 0;
        addBranch(msg.sender, "Shayan");
    }

    function addBranch(address branchAddress, string memory title) public {
        require(msg.sender == owner);
        require(newBranchId < branchCap);
        branches[newBranchId].id = newBranchId + 1;
        branches[newBranchId].owner = branchAddress;
        branches[newBranchId].title = title;
        newBranchId = newBranchId + 1;
        emit BranchAdded(branchAddress, newBranchId + 1);
    }

    function getBranches() public view returns (uint[] memory, address[] memory, string[] memory) {
        uint[] memory ids = new uint[](branchCap);
        address[] memory addresses = new address[](branchCap);
        string[] memory titles = new string[](branchCap);
        for (uint i = 0; i < branchCap; i+=1) {
            ids[i] = branches[i].id;
            addresses[i] = branches[i].owner;
            titles[i] = branches[i].title;
        }
        return (ids, addresses, titles);
    }

}