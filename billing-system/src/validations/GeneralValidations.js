const composeValidators = (...validators) =>
{    
    return value => validators.reduce((error, validator) => error || validator(value), undefined)
}

const required = (value) =>
{
    return (value ? undefined : 'Required')
}
 
const minChars = (minChars) => (value) =>
{
    return (value.length >= minChars ? undefined : `Minimum chars required: ${minChars}`)
} 

export { composeValidators, required, minChars }