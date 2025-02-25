const MAGIC_NUMS: { [key: string]: Buffer } = {

  BSV: Buffer.from("e3e1f3e8", "hex"),
  REGTEST: Buffer.from("dab5bffa", "hex"),
  TESTNET: Buffer.from("f4e5f3f4", "hex"),

  BCH: Buffer.from("e3e1f3e8", "hex"),
  tBCH: Buffer.from("dab5bffa", "hex"),
  t3BCH: Buffer.from("f4e5f3f4", "hex"),
  t4BCH: Buffer.from("e2b7daaf","hex"),
  sBCH: Buffer.from("c3afe1a2","hex"),  //scalenet
  cBCH: Buffer.from("e2b7daaf","hex"), //chip network

  BTC: Buffer.from("f9beb4d9", "hex"),
  tBTC: Buffer.from("0b110907", "hex"), // testnet3
  t4BTC: Buffer.from("1c163f28", "hex"), // testnet4
  sBTC: Buffer.from("0a03cf40", "hex"), // signet
  rBTC: Buffer.from("fabfb5da", "hex"), // regtest

  FB: Buffer.from("d99e94b9", "hex"), // Fractal Bitcoin
  tFB: Buffer.from("e8ada3c8", "hex"), // testnet Fractal Bitcoin

  XEC: Buffer.from("e3e1f3e8", "hex"),

//  "BSV-STN": Buffer.from("fbcec4f9", "hex"), // Deactivated
  DEFAULT: Buffer.from("e3e1f3e8", "hex"),
} as const;

const PORTS: { [ticker: string]: number } = {
  FB:18333,
  t4BCH:28333,
  sBCH:38333,
  cBCH:48333,
  DEFAULT:8333,

} as const;
const VERSIONS: { [ticker: string]: number } = {
  BSV: 70016,

  BTC: 70015,
  tBTC: 70015,
  t4BTC: 70015,

  FB: 70016,
  tFB: 70016,

  BCH: 70015,

  XEC: 70015,

  DEFAULT: 70015,
} as const;

const SEGWIT: { [ticker: string]: boolean } = {
  BSV: false,
  
  BCH: false,
  tBCH: false,
  t3BCH: false,

  tBTC: true,
  t4BTC: true,
  BTC: true,
  FB: true,
  tFB: true,

  XEC: false,

  DEFAULT: false,
} as const;

const USER_AGENTS: { [ticker: string]: string } = {
  BSV: "/Bitcoin SV/",
  tBTC: "/Bitcoin/",
  t4BTC: "/Bitcoin/",

  BTC: "/Bitcoin/",
  
  FB: "/Fractal Bitcoin",
  tFB: "/Fractal Bitcoin",
  
  BCH: "/Bitcoin Cash/",
  tBCH: "/Bitcoin Cash/",
  t3BCH: "/Bitcoin Cash/",

  XEC: "/Bitcoin/",
//  "BSV-STN": "/Bitcoin SV/",
  DEFAULT: "/Bitcoin/",
} as const;

const MAX_PER_MSG = 50000 as const;

export { MAGIC_NUMS, VERSIONS, USER_AGENTS, SEGWIT, MAX_PER_MSG };
