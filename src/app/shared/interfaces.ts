export interface User {
    username: string;
    // email: string
    password: string;
    returnSecureToken?: boolean;
}

export interface AuthResponse {
    // idToken?: string;
    // expiresIn?: string;
    token: string;
    username: string;
}

export interface Event {
    id?: string;
    title: string;
    date: Date;
    totalEventSum?: string;
    eventUserList?: string[];
    amountOfExpense?: string;
    expenseList?: string[];
    description?: string;

    // private List<String> eventUserLIst;
    // private List<ExpenseDto> expenseList;
}

export interface FbCreateResponse {
    name: string;
}


export interface Expense {
    id?: string;
    buyer?: string;
    comment: string;
    event?: string;
    expenseDate: Date;
    totalExpenseSum: string;
    numberOfExpenseParticipants?: string;
    expenseList?: string[];
    description?: string;
    directPayerMap: Map<string, string>;
    partitialPayerMap: Map<string, string>;
}

export interface ExpenseOut {
    id?: string;
    buyer?: string;
    comment: string;
    event?: string;
    expenseDate: Date;
    totalExpenseSum: string;
    numberOfExpenseParticipants?: string;
    expenseList?: string[];
    description?: string;
    directPayerMap?: {};
    partitialPayerMap?: {};
}

export interface DirectPayerMap {
    username: string;
    summa: string;
}

export interface PartitialPayerMap {
    username: string;
    coef: string;
}

export interface Token {
    sub: string;
    roles: string[];
    exp: string;
    iat: string;
}
