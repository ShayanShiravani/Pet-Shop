// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract PetShop {

    address public owner;
    address[10] public agents;
    uint public lastAgentId;

    event AgentAdded(address agent, uint id);


    constructor() public {
        owner = msg.sender;
        lastAgentId = 0;
    }

    function addAgent(address agent) public {
        require(msg.sender == owner);
        require(lastAgentId < 9);
        uint newAgentId = lastAgentId + 1;
        agents[newAgentId] = agent;
        emit AgentAdded(agent, newAgentId);
    }

}