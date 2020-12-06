getUserByID()
getUserByEmail()

# Registro do usuario

**RF**

- O usuario deve pode se logar usando a api do Google ou do Facebook
- O usuario deve adicionar o seu telefone em algum momento do cadastro
  (as APIS retornam:nome,email,foto)

  **RNF**

- Integrar com a API do Google e do Facebook
  **RN**
  -Deve se verificar se é o primeiro login na plataforma para captar dados faltantes e mandar o onboarding;
  -O objeto do usuario:
  {
  id:
  name:
  email:
  tell:
  avatar:
  coleção:[...]
  }

# Registro de coleção

**RF**

- O usúario deve poder adicionar um item a sua coleção em um meno especifico
- O usuario deve poder excluir um item de sua coleção(provavelmente diretamente no perfil um X do lado do item)

**RNF**

- usar multer para configurar as imagens que recebe;

**RN**

- O usuario deve poder adicionar 1 item por vez
- O usuario deve poder excluir 1 item por vez
  -Objeto do item da coleção:
  {
  id:
  item_name:
  type:"conosole"|"jogo"|"board-games"|"mod/pererifericos"
  foto: suafoto | null
  descrição:
  created_at:
  updated_at:
  avaliaçoes:[]
  }

# Avaliação dos jogos

**RF**

- O usuario deve poder comentar uma avaliação sobre um jogo como um comentario;

**RNF**

- **RN**

- O usuário não pode alterar seu email para um email ja utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga
  {
  id do usuario que comentou:
  item_id:
  descrição:
  created_at:
  updated_at:

}
