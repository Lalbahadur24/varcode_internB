import React from "react";

export default function InstallingDatabases() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Installing MySQL / PostgreSQL</h1>
      <p>
        Install MySQL or PostgreSQL using OS-specific package managers or official installers.
      </p>

      <h2>MySQL Installation</h2>
      <h3>Windows</h3>
      <pre><code>{`# Download installer from mysql.com
# Run MySQL Installer and follow wizard
# Set root password during setup`}</code></pre>

      <h3>macOS</h3>
      <pre><code>{`brew install mysql
brew services start mysql
mysql_secure_installation`}</code></pre>

      <h3>Linux (Ubuntu/Debian)</h3>
      <pre><code>{`sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation`}</code></pre>

      <h2>PostgreSQL Installation</h2>
      <h3>Windows</h3>
      <pre><code>{`# Download from postgresql.org
# Run installer and set postgres user password`}</code></pre>

      <h3>macOS</h3>
      <pre><code>{`brew install postgresql
brew services start postgresql`}</code></pre>

      <h3>Linux</h3>
      <pre><code>{`sudo apt update
sudo apt install postgresql postgresql-contrib
sudo -u postgres psql`}</code></pre>

      <h2>Verify Installation</h2>
      <pre><code>{`# MySQL
mysql --version

# PostgreSQL
psql --version`}</code></pre>

      <h2>Tips</h2>
      <ul>
        <li>Set strong passwords for admin users</li>
        <li>MySQL port: 3306, PostgreSQL port: 5432</li>
        <li>Enable remote access only if needed</li>
      </ul>
    </div>
  );
}
