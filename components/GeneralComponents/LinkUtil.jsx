// 'use client';
// import Link from 'next/link';
// import React from 'react';

// const LinkUtil = ({ children, href = null, fontSize = '1rem', className}) => {
//    if (href)
//       return (
//          <Link
//             className={`gradient-link ${className}`}
//             href={href}
//             style={{
//                textDecoration: 'underline',
//                color: 'transparent',
//                background: 'rgb(255,255,255)',
//                background:
//                   ' linear-gradient(65deg, rgba(255,255,255,1) 0%, rgba(70,229,230,1) 0%, rgba(255,147,225,1) 100%)',
//                backgroundClip: 'text',
//                WebkitBackgroundClip: 'text',
//                fontSize: fontSize,
//                fontWeight: 'bold',
//                display: 'inline',
//             }}
//          >
//             {children}
//          </Link>
//       );
//    return (
//       <p
//          style={{
//             color: 'transparent',
//             background: 'rgb(255,255,255)',
//             background:
//                ' linear-gradient(65deg, rgba(255,255,255,1) 0%, rgba(70,229,230,1) 0%, rgba(255,147,225,1) 100%)',
//             backgroundClip: 'text',
//             WebkitBackgroundClip: 'text',
//             fontSize: fontSize,
//             fontWeight: 'bold',
//             display: 'inline',
//          }}
//       >
//          {children}
//       </p>
//    );
// };

// export default LinkUtil;


'use client';
import Link from 'next/link';
import React from 'react';
import styles from './LinkUtil.module.css'; // Import CSS module

const LinkUtil = ({ children, href = null, fontSize = '1rem', className }) => {
  if (href) {
    return (
      <Link href={href} className={`${styles.gradientLink} ${className}`} style={{ fontSize }}>
        {children}
      </Link>
    );
  }

  return (
    <p className={`${styles.gradientText}`} style={{ fontSize }}>
      {children}
    </p>
  );
};

export default LinkUtil;
