export abstract class ControllerAbstract {

    /**
     * @protected
     */
    protected _requiredParameter(parameterObject: { [key: string]: any }, parameter: string[]): boolean {
        if (!parameter.length) {
            return true;
        }

        for (const param of parameter) {
            if (!parameterObject.hasOwnProperty(param)) {
                return false;
            }
        }

        return true;
    }
}
