import { useContext, useState, useRef } from "react"
import { ShoppingCartContext } from '../../Context';
import { Link, useNavigate } from "react-router-dom"
import Layout from "../../Componets/Layout"

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info');
  const form = useRef(null);
  const navigate = useNavigate();

  // Account
  const account = localStorage.getItem('account');
  const parsedAccount = account ? JSON.parse(account) : null;

  // Has an account
  const noAccountInLocalStorage = !parsedAccount || Object.keys(parsedAccount).length === 0;
  const noAccountInLocalState = !context.account || Object.keys(context.account).length === 0;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignIn = () => {
    localStorage.setItem('sign-out', JSON.stringify(false));
    context.setSignOut(false);
    navigate('/');
  };

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    };

    // Create account
    localStorage.setItem('account', JSON.stringify(data));
    context.setAccount(data);

    // Sign In
    handleSignIn();
  };

  const renderLogIn = () => (
    <div className="w-96 bg-white p-6 border border-black rounded-lg mt-5 flex flex-wrap flex-col">
      <span className="flex flex-col mb-3">
        <p className="font-light text-sm mb-2">Email:</p>
        <input
          className="rounded p-3 bg-gray-500/20"
          placeholder="shopi@shopi.com"
          defaultValue={parsedAccount?.email}
        />
      </span>

      <span className="flex flex-col">
        <p className="font-light text-sm mb-3">Password:</p>
        <input
          className="rounded bg-gray-500/20 p-3"
          placeholder="*****"
          defaultValue={parsedAccount?.password}
        />
      </span>

      <Link to="/">
        <button
          className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-1"
          onClick={handleSignIn}
          disabled={!hasUserAnAccount}
        >
          Log In
        </button>
      </Link>
      <div className="text-center">
        <a className="font-light text-xs underline underline-offset-4" href="/">Forgot my password?</a>
      </div>

      <div className="text-center mt-4 text-xs">
        <span>Don't have an account yet? <p className="font-light underline underline-offset-4 cursor-pointer"
          onClick={() => setView('create-user-info')}>
          Sign up for free!
        </p></span>
      </div>
    </div>
  );

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className="w-96 bg-white p-6 border border-black rounded-lg mt-5 flex flex-wrap flex-col">
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="name" className="font-light text-sm">Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Peter"
            className="rounded bg-gray-500/20 p-3"
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="email" className="font-light text-sm">Your email:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="hi@helloworld.com"
            className="rounded bg-gray-500/20 p-3"
          />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <label htmlFor="password" className="font-light text-sm">Your Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="*****"
            className="rounded bg-gray-500/20 p-3"
          />
        </div>
        <Link to="/">
          <button className="bg-black text-white w-full rounded-lg py-3 mt-3"
            onClick={createAnAccount}>
            Create your account!
          </button>
        </Link>
      </form>
    );
  };

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn();

  return (
    <Layout>
      <div className="flex flex-wrap bg-gray-900 w-full p-4 justify-center relative mb-4 -m-4">
        <h1 className="font-serif font-light text-xl text-white uppercase tracking-wide text-center">Welcome to Shopi </h1>
      </div>
      {renderView()}
    </Layout>
  );
}

export default SignIn;
