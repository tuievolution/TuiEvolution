import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="pt-40 text-center">
        <h2 className="text-2xl text-red-500 font-bold">Erişim Reddedildi</h2>
        <p>Lütfen profilinizi görmek için giriş yapınız.</p>
      </div>
    );
  }

  return (
    <div className="pt-32 container mx-auto px-6">
      <div className="glass max-w-2xl mx-auto p-10 rounded-3xl">
        <h1 className="text-3xl font-bold text-accent mb-6 border-b border-accent/20 pb-4">Kullanıcı Profili</h1>
        <div className="space-y-4 text-lg">
          <div className="flex justify-between">
            <span className="font-bold">Ad Soyad:</span>
            <span>{user.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">E-Posta:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Rol:</span>
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm">{user.role.toUpperCase()}</span>
          </div>
          <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-700 dark:text-green-300 text-sm">
            ✅ SQL Veritabanı Erişim İzni Tanımlandı.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;