// src/utils/consoleEasterEgg.js
const clarityEnabled = import.meta.env.VITE_ENABLE_CLARITY === 'true';
export function showConsoleEasterEgg() {
  const styles = {
    warning: `
      background: #dc2626;
      color: #ffffff;
      font-size: 48px;
      font-weight: 900;
      font-family: monospace;
      padding: 24px 32px;
      letter-spacing: 4px;
    `,

    alertText: `
      background: #050505;
      color: #f5f5f5;
      font-size: 16px;
      font-family: monospace;
      line-height: 1.6;
      padding: 18px 32px 8px 32px;
    `,

    dimText: `
      background: #050505;
      color: #a1a1aa;
      font-size: 15px;
      font-family: monospace;
      line-height: 1.6;
      padding: 8px 32px 18px 32px;
    `,

    hackedText: `
      background: #050505;
      color: #22c55e;
      font-size: 22px;
      font-weight: 900;
      font-family: monospace;
      line-height: 1.6;
      padding: 18px 32px;
      letter-spacing: 2px;
    `,

    terminalText: `
      background: #050505;
      color: #22c55e;
      font-size: 14px;
      font-family: monospace;
      line-height: 1.5;
      padding: 16px 32px;
    `,

    employerText: `
      background: #050505;
      color: #a7f3d0;
      font-size: 15px;
      font-family: monospace;
      line-height: 1.6;
      padding: 18px 32px 24px 32px;
    `,
  };

  console.log('%cWARNING WARNING', styles.warning);

  console.log('%cUnauthorized curiosity detected.', styles.alertText);

  console.log(
    '%cOh hello there, tryna take a peek at something eh? I do not know what you will find, but you do you.',
    styles.dimText,
  );

  console.log(
    `%c
  (•_•)
  <)   )╯  Snooping detected...
   /   \\

  Opening DevTools? Bold move.
`,
    styles.terminalText,
  );

  console.log('%cMAINFRAME ACCESS GRANTED', styles.hackedText);

  console.log(
    `%c
> bypassing_firewall.exe          
> decrypting_resume.pdf          
> scanning_projects_folder          
> checking_for_clean_code          
> passion_detected: true          
> mainframe_hacked: definitely_not
>                                
`,
    styles.terminalText,
  );
  console.log(
    `%c                    
> is_user_a_cutie_pie: ${clarityEnabled ? 'true' : 'false'}
`,
    styles.terminalText,
  );
  console.log(
    '%cYou have hacked the mainframe. Kind of. Not really. But I respect the effort.',
    styles.dimText,
  );

  console.log(
    '%cEmployer note: If you are reading this, I build full-stack apps, enjoy the full software cycle, and care about the tiny details most people miss. Please consider hiring me.',
    styles.employerText,
  );
}
