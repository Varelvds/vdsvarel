function email() {
    Email.send({
    Host: 'smtp.elasticemail.com' ,
   username: "varel.vandersan@student.natin.sr",
   password: "469A38858AFF0106000750A62C482D0F5AC3",   
   To: 'varelvds11@gmail.com',
   From: 'varel.vandersan@student.natin.sr',
   Subject: 'This is the subject',
   Body: 'And this is the body'
}).then(
  message => alert(message)
);
}