import { PlusCircleIcon } from "@heroicons/react/outline"

export default function Login() {
    return (
        <>
        <div className="flex mx-auto mt-24 w-6/12 h-96 rounded-lg border-2 border-gray-200">
            <section className="w-full flex">
                <div className="justify-center px-12">
                    <h1 className="text-2xl mt-8 font-bold text-gray-400">LOGIN</h1>
                    <div className="mt-8">
                        <label className="text-gray-500" htmlFor="user">Usuário</label>
                        <input 
                        type="text" 
                        id="user" 
                        className="mt-2 w-64 border-2 border-gray-200 px-4 py-1 rounded-xl" 
                        placeholder="Usuário"
                        />
                    </div>
                    <div className="mt-8">
                        <label className="text-gray-500" htmlFor="password">Senha</label>
                        <input 
                        type="password" 
                        id="password" 
                        className="mt-2 w-64 border-2 border-gray-200 px-4 py-1 rounded-xl" 
                        placeholder="Senha"
                        />
                        <button 
                        type="submit" 
                        className="mt-12 mb-8 rounded-xl hover:bg-purple-400 duration-200 bg-purple-500 w-full text-white font-bold px-4 py-2">
                            Entrar
                        </button>
                    </div>
                </div>
                <div className="bg-purple-300 w-full border-2 border-l-purple-700">
                    <div>
                        <p className="mt-8 text-white justify-center font-bold flex">Ainda não possui uma conta?</p>
                        <p className="mt-8 justify-center mx-3 text-white flex">Caso deseje criar uma nova conta, clique no botão abaixo:</p>
                        <button 
                        type="submit"
                        className="font-bold flex mx-auto text-gray-500 text-center w-38 mt-8 px-4 py-2 bg-white border-2 rounded-xl border-purple-500 items-center">
                            Criar conta
                            <PlusCircleIcon aria-hidden="true"  className="text-purple-700 h-6 w-6 ml-2" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}