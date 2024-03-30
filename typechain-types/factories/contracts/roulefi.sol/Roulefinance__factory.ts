/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Roulefinance,
  RoulefinanceInterface,
} from "../../../contracts/roulefi.sol/Roulefinance";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_RoulefiToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint8[]",
        name: "buyData",
        type: "uint8[]",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "drawroublefi",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "return_value",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052604051806101200160405280600060ff168152602001600260ff168152602001600360ff168152602001600460ff168152602001600560ff168152602001600660ff168152602001600760ff168152602001600860ff168152602001600960ff1681525060059060096200007a92919062000242565b503480156200008857600080fd5b5060405162002203380380620022038339818101604052810190620000ae919062000379565b33600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001245760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016200011b9190620003bc565b60405180910390fd5b62000135816200017e60201b60201c565b5080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620003d9565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b82805482825590600052602060002090601f01602090048101928215620002dd5791602002820160005b83821115620002ac57835183826101000a81548160ff021916908360ff16021790555092602001926001016020816000010492830192600103026200026c565b8015620002db5782816101000a81549060ff0219169055600101602081600001049283019260010302620002ac565b505b509050620002ec9190620002f0565b5090565b5b808211156200030b576000816000905550600101620002f1565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003418262000314565b9050919050565b620003538162000334565b81146200035f57600080fd5b50565b600081519050620003738162000348565b92915050565b6000602082840312156200039257620003916200030f565b5b6000620003a28482850162000362565b91505092915050565b620003b68162000334565b82525050565b6000602082019050620003d36000830184620003ab565b92915050565b611e1a80620003e96000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80637f8e48f51161005b5780637f8e48f5146100dd5780638da5cb5b146100f9578063edf0175714610117578063f2fde38b1461012157610088565b80631249c58b1461008d57806314f482ae146100975780634e71d92d146100b5578063715018a6146100d3575b600080fd5b61009561013d565b005b61009f6101d9565b6040516100ac91906116ff565b60405180910390f35b6100bd610230565b6040516100ca9190611733565b60405180910390f35b6100db610376565b005b6100f760048036038101906100f291906117e9565b61038a565b005b6101016104b7565b60405161010e919061188a565b60405180910390f35b61011f6104e0565b005b61013b600480360381019061013691906118d1565b61094f565b005b6101456109d5565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930620186a06040518363ffffffff1660e01b81526004016101a5929190611943565b600060405180830381600087803b1580156101bf57600080fd5b505af11580156101d3573d6000803e3d6000fd5b50505050565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160149054906101000a900460ff16905090565b60008061023c33610a5c565b9050600081111561036657600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b81526004016102a492919061196c565b600060405180830381600087803b1580156102be57600080fd5b505af11580156102d2573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639dc29fac30836040518363ffffffff1660e01b815260040161033392919061196c565b600060405180830381600087803b15801561034d57600080fd5b505af1158015610361573d6000803e3d6000fd5b505050505b61036f336110b0565b8091505090565b61037e6109d5565b610388600061110e565b565b6104b283838360008181106103a2576103a1611995565b5b90506020020160208101906103b791906119f0565b848460018181106103cb576103ca611995565b5b90506020020160208101906103e091906119f0565b858560028181106103f4576103f3611995565b5b905060200201602081019061040991906119f0565b8686600381811061041d5761041c611995565b5b905060200201602081019061043291906119f0565b8787600481811061044657610445611995565b5b905060200201602081019061045b91906119f0565b8888600581811061046f5761046e611995565b5b905060200201602081019061048491906119f0565b8989600681811061049857610497611995565b5b90506020020160208101906104ad91906119f0565b6111d2565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60001515600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff16151514610576576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056d90611a7a565b60405180910390fd5b33600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001601461060361169a565b61060d9190611ac9565b6106179190611b29565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160146101000a81548160ff021916908360ff1602179055506001601461067d61169a565b6106879190611ac9565b6106919190611b29565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160156101000a81548160ff021916908360ff160217905550600160146106f761169a565b6107019190611ac9565b61070b9190611b29565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160166101000a81548160ff021916908360ff1602179055506001601461077161169a565b61077b9190611ac9565b6107859190611b29565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160176101000a81548160ff021916908360ff160217905550600160146107eb61169a565b6107f59190611ac9565b6107ff9190611b29565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160186101000a81548160ff021916908360ff1602179055506001601461086561169a565b61086f9190611ac9565b6108799190611b29565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160196101000a81548160ff021916908360ff160217905550600160146108df61169a565b6108e99190611ac9565b6108f39190611b29565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001601a6101000a81548160ff021916908360ff160217905550565b6109576109d5565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109c95760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016109c0919061188a565b60405180910390fd5b6109d28161110e565b50565b6109dd6116db565b73ffffffffffffffffffffffffffffffffffffffff166109fb6104b7565b73ffffffffffffffffffffffffffffffffffffffff1614610a5a57610a1e6116db565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610a51919061188a565b60405180910390fd5b565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806101600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820160009054906101000a900460ff1660ff1660ff1681526020016002820160019054906101000a900460ff1660ff1660ff1681526020016002820160029054906101000a900460ff1660ff1660ff1681526020016002820160039054906101000a900460ff1660ff1660ff1681526020016002820160049054906101000a900460ff1660ff1660ff1681526020016002820160059054906101000a900460ff1660ff1660ff1681526020016002820160069054906101000a900460ff1660ff1660ff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152505090503373ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614610c6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6590611baa565b60405180910390fd5b80610140015115610cb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cab90611c16565b60405180910390fd5b610cbc6104e0565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160149054906101000a900460ff1660ff1603610d51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4890611c82565b60405180910390fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160149054906101000a900460ff1660ff16826040015160ff1603610dc2578080610dbe90611ca2565b9150505b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160159054906101000a900460ff1660ff16826060015160ff1603610e31578080610e2d90611ca2565b9150505b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160169054906101000a900460ff1660ff16826080015160ff1603610ea0578080610e9c90611ca2565b9150505b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160179054906101000a900460ff1660ff168260a0015160ff1603610f0f578080610f0b90611ca2565b9150505b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160189054906101000a900460ff1660ff168260c0015160ff1603610f7e578080610f7a90611ca2565b9150505b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160199054906101000a900460ff1660ff168260e0015160ff1603610fed578080610fe990611ca2565b9150505b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001601a9054906101000a900460ff1660ff1682610100015160ff160361105d57808061105990611ca2565b9150505b60058160ff168154811061107457611073611995565b5b90600052602060002090602091828204019190069054906101000a900460ff1660ff168261012001516110a79190611ccb565b92505050919050565b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff02191690831515021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639dc29fac338a6040518363ffffffff1660e01b815260040161122f92919061196c565b600060405180830381600087803b15801561124957600080fd5b505af115801561125d573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f19308a6040518363ffffffff1660e01b81526004016112be92919061196c565b600060405180830381600087803b1580156112d857600080fd5b505af11580156112ec573d6000803e3d6000fd5b5050505033600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff021916908360ff16021790555085600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160016101000a81548160ff021916908360ff16021790555084600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160026101000a81548160ff021916908360ff16021790555083600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160036101000a81548160ff021916908360ff16021790555082600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160046101000a81548160ff021916908360ff16021790555081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160056101000a81548160ff021916908360ff16021790555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160066101000a81548160ff021916908360ff16021790555087600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301819055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff0219169083151502179055505050505050505050565b600060644244336040516020016116b393929190611d76565b6040516020818303038152906040528051906020012060001c6116d69190611db3565b905090565b600033905090565b600060ff82169050919050565b6116f9816116e3565b82525050565b600060208201905061171460008301846116f0565b92915050565b6000819050919050565b61172d8161171a565b82525050565b60006020820190506117486000830184611724565b92915050565b600080fd5b600080fd5b6117618161171a565b811461176c57600080fd5b50565b60008135905061177e81611758565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126117a9576117a8611784565b5b8235905067ffffffffffffffff8111156117c6576117c5611789565b5b6020830191508360208202830111156117e2576117e161178e565b5b9250929050565b6000806000604084860312156118025761180161174e565b5b60006118108682870161176f565b935050602084013567ffffffffffffffff81111561183157611830611753565b5b61183d86828701611793565b92509250509250925092565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061187482611849565b9050919050565b61188481611869565b82525050565b600060208201905061189f600083018461187b565b92915050565b6118ae81611869565b81146118b957600080fd5b50565b6000813590506118cb816118a5565b92915050565b6000602082840312156118e7576118e661174e565b5b60006118f5848285016118bc565b91505092915050565b6000819050919050565b6000819050919050565b600061192d611928611923846118fe565b611908565b61171a565b9050919050565b61193d81611912565b82525050565b6000604082019050611958600083018561187b565b6119656020830184611934565b9392505050565b6000604082019050611981600083018561187b565b61198e6020830184611724565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6119cd816116e3565b81146119d857600080fd5b50565b6000813590506119ea816119c4565b92915050565b600060208284031215611a0657611a0561174e565b5b6000611a14848285016119db565b91505092915050565b600082825260208201905092915050565b7f616c726561647920616374697661746564000000000000000000000000000000600082015250565b6000611a64601183611a1d565b9150611a6f82611a2e565b602082019050919050565b60006020820190508181036000830152611a9381611a57565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611ad4826116e3565b9150611adf836116e3565b925082611aef57611aee611a9a565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611b34826116e3565b9150611b3f836116e3565b9250828201905060ff811115611b5857611b57611afa565b5b92915050565b7f6e6f7420796f7572207469636b65740000000000000000000000000000000000600082015250565b6000611b94600f83611a1d565b9150611b9f82611b5e565b602082019050919050565b60006020820190508181036000830152611bc381611b87565b9050919050565b7f616c726561647920636c61696d65640000000000000000000000000000000000600082015250565b6000611c00600f83611a1d565b9150611c0b82611bca565b602082019050919050565b60006020820190508181036000830152611c2f81611bf3565b9050919050565b7f6e6f742064726177656420796574000000000000000000000000000000000000600082015250565b6000611c6c600e83611a1d565b9150611c7782611c36565b602082019050919050565b60006020820190508181036000830152611c9b81611c5f565b9050919050565b6000611cad826116e3565b915060ff8203611cc057611cbf611afa565b5b600182019050919050565b6000611cd68261171a565b9150611ce18361171a565b9250828202611cef8161171a565b91508282048414831517611d0657611d05611afa565b5b5092915050565b6000819050919050565b611d28611d238261171a565b611d0d565b82525050565b60008160601b9050919050565b6000611d4682611d2e565b9050919050565b6000611d5882611d3b565b9050919050565b611d70611d6b82611869565b611d4d565b82525050565b6000611d828286611d17565b602082019150611d928285611d17565b602082019150611da28284611d5f565b601482019150819050949350505050565b6000611dbe8261171a565b9150611dc98361171a565b925082611dd957611dd8611a9a565b5b82820690509291505056fea2646970667358221220fb9e7e254a01a4835e0e8c2375c340932e94fb7d6026197dcc2ffdc59477997564736f6c63430008180033";

type RoulefinanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoulefinanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Roulefinance__factory extends ContractFactory {
  constructor(...args: RoulefinanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _RoulefiToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_RoulefiToken, overrides || {});
  }
  override deploy(
    _RoulefiToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_RoulefiToken, overrides || {}) as Promise<
      Roulefinance & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Roulefinance__factory {
    return super.connect(runner) as Roulefinance__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoulefinanceInterface {
    return new Interface(_abi) as RoulefinanceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Roulefinance {
    return new Contract(address, _abi, runner) as unknown as Roulefinance;
  }
}
