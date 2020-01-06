const Router = require('koa-router');
const router = new Router();
const MailParser = require('mailparser').MailParser;
var Imap = require('imap'),
    inspect = require('util').inspect;

var imap = new Imap({
  user: 'godparty@naver.com',
  password: 'nvjhl1305',
  host: 'imap.naver.com',
  port: 993,
  tls: true
});

function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
}


router.get('/mail', async ctx =>{
    imap.once('ready', function() {
        openInbox(async function(err, box) {
            if (err) throw err;

            //            let test = await imap.sort(['ALL'], ['REVERSE'] );
            //            console.log(test);

            var f = imap.seq.fetch('1:3', {
                bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
                struct: true,
            });

            f.on('message', function(msg, seqno) {
                console.log('Message #%d', seqno);
                var prefix = '(#' + seqno + ') ';
                msg.on('body', function(stream, info) {
                    var buffer = '';
                    stream.on('data', function(chunk) {
                      buffer += chunk.toString('utf8');
                    });
                    stream.once('end', function() {
                      console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
                    });
                });
                msg.once('attributes', function(attrs) {
                    console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                });
                msg.once('end', function() {
                    console.log(prefix + 'Finished');
                });
            });
            f.once('error', function(err) {
                console.log('Fetch error: ' + err);
            });
            f.once('end', function() {
                console.log('Done fetching all messages!');
                imap.end();
            });
      });
});

imap.once('error', function(err) {
  console.log(err);
});

imap.once('end', function() {
  console.log('Connection ended');
});

imap.connect();
})

module.exports = router;
