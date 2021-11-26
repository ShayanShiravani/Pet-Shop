// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract PetShop {

    address public owner;
    Agent[10] public agents;
    uint public lastAgentId;

    event AgentAdded(address agent, uint id);

    struct Pet {
        uint id;
        string name;
        uint age;
        uint nationalID;
        address owner;
    }

    struct Agent {
        uint id;
        address owner;
        Pet[] pets;
    }


    constructor() public {
        owner = msg.sender;
        lastAgentId = 0;
        addAgent(msg.sender);
    }

    function addAgent(address agentAddress) public {
        require(msg.sender == owner);
        require(lastAgentId < 9);
        uint newAgentId = lastAgentId + 1;
        agents[newAgentId-1].id = newAgentId;
        agents[newAgentId-1].owner = agentAddress;
        emit AgentAdded(agentAddress, newAgentId);
    }

    function getAgents() public view returns (uint[] memory, address[] memory) {
        uint[] memory ids = new uint[](10);
        address[] memory addresses = new address[](10);
        for (uint i = 0; i < 10; i+=1) {
            ids[i] = agents[i].id;
            addresses[i] = agents[i].owner;
        }
        return (ids, addresses);
    }

}