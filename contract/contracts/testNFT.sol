// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract testNFT is ERC721URIStorage {
    address public minter;

    constructor() ERC721("Test NFT", "TESTNFT") {minter = msg.sender;}

    function mint(address to, uint256 tokenId, string memory uri) external {
        require(msg.sender == minter, "Minting is restricted");
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
     function _transfer(address /* from */, address /* to */, uint256 /* tokenId */) internal virtual override {
        revert("Transfer is disabled");
    }
}