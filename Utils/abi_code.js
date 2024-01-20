[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "createdBy",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "alphanumericCode",
				"type": "string"
			}
		],
		"name": "MedicineAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_manufacturer",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_batchNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_manufacturingDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_expiryDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_storageConditions",
				"type": "string"
			}
		],
		"name": "addMedicine",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "alphanumericCode",
				"type": "string"
			}
		],
		"name": "getMedicineByAlphanumericCode",
		"outputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturer",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "batchNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturingDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "expiryDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "storageConditions",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "createdBy",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "medicineCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "medicineIdByAlphanumericCode",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "medicines",
		"outputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturer",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "batchNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturingDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "expiryDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "storageConditions",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "createdBy",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "alphanumericCode",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]



const contract_address = "0x1fEB7908A241c5033E6e1E0F2Db7E3324a62897b"