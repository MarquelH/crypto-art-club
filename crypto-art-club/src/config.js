import {config} from "@onflow/fcl"

config()
.put("accessNode.api", "http://localhost:8080")
.put("challenge.handshake", "https://fcl-discovery.onflow.org/testnet/authn")
.put("0xProfile", 0xf8d6e0586b0a20c7)