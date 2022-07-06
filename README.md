# test-harness-cypress3


> Cypress testing harness for DApps with built-in impersonation of accounts 


```typescript


/** Connect to Wallet  */
cy.visit('https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x6B3595068778DD592e39A122f4f5a5cF09C90fE2');
cy.get('.items-center > #connect-wallet').click();

/** Connect to Wallet -> Change Asset */
cy.visit('https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x6B3595068778DD592e39A122f4f5a5cF09C90fE2');
cy.get('.items-center > #connect-wallet').click();
cy.get('.bg-\[rgba\(0\,0\,0\,0\.2\)\]').click();

/** Logged In (chainId1) -> Toggle Sushi Guard -> Toggle Expert Mode -> Enter 1.00 into swap from area */
cy.visit('https://app.sushi.com/swap?inputCurrency=0x6B3595068778DD592e39A122f4f5a5cF09C90fE2&outputCurrency=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&chainId=1');
cy.get('.w-\[26px\]').click();
cy.get('.w-\[26px\]').click();
cy.get('.bg-blue\/20').click();
cy.get('#headlessui-switch-65').click();
cy.get('.px-2 > .gap-1').click();
cy.get('.border-dark-700:nth-child(1) .text-2xl > .relative:nth-child(1)').click();
