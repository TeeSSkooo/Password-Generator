import PasswordGenerator from 'components/password-generator/PasswordGenerator';

export default function App() {
  return (
    <div className="min-h-screen grid place-items-center bg-[#0f0e14]">
      <div className="p-[15px]">
        <PasswordGenerator />
      </div>
    </div>
  );
}
