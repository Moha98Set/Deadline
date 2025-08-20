"use client";

import { useState, useEffect, useRef } from "react";

export default function LoginPage() {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputsRef = useRef([]);

  useEffect(() => {
    let interval;
    if (step === "code") {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step]);

  const onSubmit = async () => {
  // بدون اعتبارسنجی شماره
  const res = await fetch("/api/auth/send-code", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone }),
  });

    const data = await res.json();
    if (res.ok) {
      setStep("code");
      setTimer(60); // reset timer
    } else {
      alert(data.message || "ارسال کد ناموفق بود");
    }
  };

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < code.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerifyCode = async (finalCode) => {
    const res = await fetch("/api/auth/verify-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, code: finalCode }),
    });

    const data = await res.json();
    if (res.ok && data.redirect) {
      window.location.href = data.redirect;
    } else {
      alert(data.message || "کد اشتباه است");
    }
  };

  const onVerify = () => {
    const fullCode = code.join("");
    if (fullCode.length !== 5) return alert("کد را کامل وارد کنید");
    handleVerifyCode(fullCode);
  };

  const resendCode = () => {
    setTimer(60);
    onSubmit(); // re-use same handler
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" dir="rtl">
      {step === "phone" ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto text-center font-sans">
          <div className="flex justify-center mb-4">
            <img
              src="https://tr.viramap.ir/images/icon.png"
              alt="Logo"
              className="w-24 h-24 object-contain rounded-full border bg-slate-100"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-700 mb-2">ورود / ثبت‌نام</h2>
          <p className="text-sm text-gray-500 mb-6 leading-6">
            لطفاً شماره موبایل خود را وارد نمایید.
          </p>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="مثال: 09123456789"
            className="w-full border border-blue-900 p-3 rounded-md mb-2 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

          <button
            onClick={onSubmit}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 rounded-md transition duration-150"
          >
            دریافت کد تأیید
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto text-center font-sans">
          <div className="text-green-600 text-4xl mb-4">
            <span className="inline-block w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              🔐
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">کد تأیید را وارد کنید</h2>
          <p className="text-sm text-gray-500 mb-6">
            کد ارسال‌شده به <span className="font-bold">۰۹*******{phone.slice(-4)}</span> را وارد نمایید.
          </p>

          <div className="flex justify-between gap-2 mb-4" dir="ltr">
            {code.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                inputMode="numeric"
                pattern="[0-9]*"
                dir="ltr"
                className="w-12 h-14 text-xl border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-green-400"
              />
            ))}
          </div>

          {timer > 0 ? (
            <p className="text-sm text-gray-500 mb-4">ارسال مجدد تا {timer} ثانیه</p>
          ) : (
            <button onClick={resendCode} className="text-sm text-green-600 underline mb-4">
              ارسال مجدد کد
            </button>
          )}

          <button
            onClick={onVerify}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-md transition duration-150"
          >
            تأیید
          </button>
        </div>
      )}
    </div>
  );
}
