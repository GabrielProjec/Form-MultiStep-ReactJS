function UserForm() {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="name">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu e-mail"
          required
        />
      </div>
    </div>
  );
}

export default UserForm;
