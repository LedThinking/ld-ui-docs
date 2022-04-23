import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const DoItYourSelf: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={styles.Container}>
      <h3 className={styles.Title}>Give it a Try. It's 100% free.</h3>
      <div className={styles.Terminal}>
        <code>
          npm install{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.customFields.npmCoreUrl as any}>
            @ld-ui/core
          </a>
        </code>
      </div>
    </div>
  );
};

export default DoItYourSelf;