import React from "react";

export default function InstallingMySQLPostgreSQL() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#4a0080]">
        Installing MySQL & PostgreSQL
      </h1>

      <p className="text-slate-700 leading-relaxed">
        MySQL and PostgreSQL are the two most popular open-source relational
        database systems. This guide covers installation on Windows, macOS, and
        Linux.
      </p>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        {/* ---------------- MySQL ---------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Installing MySQL
          </h2>

          <p className="mt-2">Download MySQL Community Server:</p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <code>https://dev.mysql.com/downloads/mysql/</code>
          </div>

          {/* Windows */}
          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">Windows</h3>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Download MySQL Installer (MSI)</li>
            <li>Choose “Developer Default” setup</li>
            <li>Set root password</li>
            <li>Install MySQL Workbench (optional)</li>
          </ul>

          {/* macOS */}
          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">macOS</h3>

          <p className="mt-2">Using Homebrew:</p>
          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-2">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-4 w-full text-sm leading-7 font-mono bg-white">
                {`brew install mysql
brew services start mysql

# Set root password
mysql_secure_installation`}
              </pre>
            </div>
          </div>

          {/* Linux */}
          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">Linux</h3>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-2">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-4 w-full text-sm leading-7 font-mono bg-white">
                {`sudo apt update
sudo apt install mysql-server -y
sudo systemctl enable mysql
sudo mysql_secure_installation`}
              </pre>
            </div>
          </div>

          <p className="mt-2">
            Test connection:
            <br />
            <code>mysql -u root -p</code>
          </p>
        </section>

        {/* ---------------- PostgreSQL ---------------- */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">
            Installing PostgreSQL
          </h2>

          <p className="mt-2">Download official installer:</p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <code>https://www.postgresql.org/download/</code>
          </div>

          {/* Windows */}
          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">Windows</h3>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Download the EDB Installer</li>
            <li>Set superuser password (postgres)</li>
            <li>Install pgAdmin (GUI client)</li>
            <li>Finish installation</li>
          </ul>

          {/* macOS */}
          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">macOS</h3>

          <p className="mt-2">Using Homebrew:</p>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-2">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-4 w-full text-sm leading-7 font-mono bg-white">
                {`brew install postgresql
brew services start postgresql

# Create user and DB
initdb /usr/local/var/postgres
createdb mydb`}
              </pre>
            </div>
          </div>

          {/* Linux */}
          <h3 className="text-xl font-semibold mt-4 text-[#4a0080]">Linux</h3>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-2">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-4 w-full text-sm leading-7 font-mono bg-white">
                {`sudo apt update
sudo apt install postgresql postgresql-contrib -y

# Login to PostgreSQL shell
sudo -u postgres psql`}
              </pre>
            </div>
          </div>

          <p className="mt-2">
            Test connection:
            <br />
            <code>psql -U postgres</code>
          </p>

          <h3 className="text-xl font-semibold mt-6 text-[#4a0080]">
            Creating a Database
          </h3>

          <div className="bg-gray-200 rounded-lg shadow-sm overflow-hidden mt-2">
            <div className="flex">
              <div className="w-1 bg-[#4a0080]" />
              <pre className="p-4 w-full text-sm leading-7 font-mono bg-white">
                {`CREATE DATABASE mydb;
\c mydb

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);`}
              </pre>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4a0080]">Tips</h2>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Use GUI tools: MySQL Workbench or pgAdmin.</li>
            <li>Always set a strong root/postgres password.</li>
            <li>Prefer Docker for isolated development databases.</li>
            <li>Use SQL clients like TablePlus, DBeaver, or DataGrip.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
