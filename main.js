
var cmd = DemoCommand.instance(document.getElementById('command-line'));
   cmd.info('Type [help] to show available commands');
   cmd.startNewCommand();

   var cmd2 = DemoCommand.instance(document.getElementById('command-line-2'));
   cmd2.output('Type any username to login');
   cmd2.run('login');