import './Forms.css';
let formControlError = 'formControlError';

export const LoginInputArea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error ? <span className='textError'>{meta.error}</span> : ''
    console.log(meta.error)
    return (
        <div>
        <div>
        <input className = {hasError ? formControlError : ''} {...input} {...props}/>
        </div>
        <div>
            {hasError}
        </div>
        </div>
    
    )
}

export const PasswordInputArea = ({input, meta , ...props}) => {
    let hasError = meta.touched && meta.error ? <span className='textError'>{meta.error}</span>:''
    return (
        <div>
            <div>
            <input className = {hasError ? formControlError : ''} {...input} {...props}/>
            </div>
            <div>
                {hasError}
            </div>
        </div>
    )
}