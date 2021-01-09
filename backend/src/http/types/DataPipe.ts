export interface DataPipe <T, R> {

    pipe(data: T): Promise<R>;

}