export class Callstack {
  signature: string;
  executionTime:number;
  children: Callstack[];
  ioquery: boolean;
  netExecutionTime: number;
  shortSignature:string;
}
