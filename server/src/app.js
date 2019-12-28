// koa module declare 
const Koa = require('koa')
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const logger = require('koa-logger')

const app = new Koa()
const router = new Router();

// koa module middleware enroll
app.use(bodyParser());
app.use(cors());
app.use(logger());


const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();
var Post = require("../models/post");

router.get('/posts', async(ctx, next) => {
	try {
		let result = await Post.find({}, 'title description')
		ctx.body = result
	} catch(error){
		console.log(error);
	}
})

router.post('/add_post', async(ctx, next) => {
	console.log(ctx.req.db)
	ctx.body = "test"
	//	var db = req.db;
	//	var title = req.body.title;
	//	var description = req.body.description;
	//	var new_post = new Post({
	//		title: title,
	//		description: description
	//	})
	//
	//	new_post.save(function (error) {
	//		if (error) {
	//			console.log(error)
	//		}
	//		res.send({
	//			success: true
	//		})
	//	})
})

router.put('/posts/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }

	  post.title = req.body.title
	  post.description = req.body.description
	  post.save(function (error) {
			if (error) {
				console.log(error)
			}
			res.send({
				success: true
			})
		})
	})
})

router.delete('/posts/:id', (req, res) => {
	console.log('delete')
	var db = req.db;
	Post.remove({
		_id: req.params.id
	}, function(err, post){
		if (err)
			res.send(err)
		res.send({
			success: true
		})
	})
})

router.get('/post/:id', (req, res) => {
	console.log('get')
	var db = req.db;
	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})

router.get('/login', (ctx)=>{
    console.log('login');
    ctx.body = "login";
})
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 8081)
