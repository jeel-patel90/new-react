const InputBox = ({
    label,
    amount,
    currencyOptions,
    onCurrencyChange,
    selectCurrency,
    onAmountChange,
    amountDisable
  }) => (
    <div className="mb-3">
      <label className="block text-sm font-medium">{label}</label>
      <div className="flex">
        {/* Currency Dropdown */}
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="flex-1 p-2 border rounded"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
  
        {/* Amount Input */}
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          disabled={amountDisable} // Disable this only in the 'To' input box
          className="flex-1 p-2 border rounded ml-2"
        />
      </div>
    </div>
  );
  
  export default InputBox;
  