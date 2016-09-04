var express = require('express');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var moment = require('moment');
var _ = require('underscore');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/movies');
Movie = require('./models/movies');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')))
app.set('views','./views/pages');
app.set('view engine','jade');


app.listen(port);

console.log('movie started on port '+port);


//index page

app.get('/',function (req,res) {
    Movie.fetch(function (err,movies) {
        if(err){
            console.log(err);
        }
        res.render('index',{
            title:'movie 首页',
            movies:movies
        })
    });
//	render 调用views下面 jade文件
// 	res.render('index',{
// 		title:'movie 首页',
//         movies:[{
// 		    title: '惊天魔盗团2',
//             _id: 1,
//             poster: 'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=b1c06780be99a9012f3853647cfc611e/730e0cf3d7ca7bcba4b67cbbb8096b63f724a851.jpg'
//         },{
//             title: '惊天魔盗团2',
//             _id: 2,
//             poster: 'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=b1c06780be99a9012f3853647cfc611e/730e0cf3d7ca7bcba4b67cbbb8096b63f724a851.jpg'
//         },{
//             title: '惊天魔盗团2',
//             _id: 3,
//             poster: 'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=b1c06780be99a9012f3853647cfc611e/730e0cf3d7ca7bcba4b67cbbb8096b63f724a851.jpg'
//         },{
//             title: '惊天魔盗团2',
//             _id: 4,
//             poster: 'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=b1c06780be99a9012f3853647cfc611e/730e0cf3d7ca7bcba4b67cbbb8096b63f724a851.jpg'
//         },{
//             title: '惊天魔盗团2',
//             _id: 5,
//             poster: 'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=b1c06780be99a9012f3853647cfc611e/730e0cf3d7ca7bcba4b67cbbb8096b63f724a851.jpg'
//         },{
//             title: '惊天魔盗团2',
//             _id: 6,
//             poster: 'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=b1c06780be99a9012f3853647cfc611e/730e0cf3d7ca7bcba4b67cbbb8096b63f724a851.jpg'
//         }]
// 	})
});
app.get('/admin/list',function (req,res) {
    Movie.fetch(function (err,movies) {
        if(err){
            console.log(err);
        }
        res.render('list',{
            title:'movie 列表',
            movies:movies
        })
    });
    //render 调用views下面 jade文件
    // res.render('list',{
    //     title:'movie 列表',
    //     movies:[{
    //         _id: 1,
    //         director: '朱浩伟',
    //         country: '英语',
    //         title: '惊天魔盗团2',
    //         poster:'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=b1c06780be99a9012f3853647cfc611e/730e0cf3d7ca7bcba4b67cbbb8096b63f724a851.jpg',
    //         language: 'English',
    //         desc:'影讲述了杰西·艾森伯格、伍迪·哈里森、艾拉·菲舍尔、戴夫·弗兰科。'
    //     }]
    // })
});
app.get('/movie/:id',function(req,res){
    var id = req.params.id;
    Movie.findById(id,function (err,movie) {
        res.render('detail',{
            title:"电影详情页",
            movie:movie
        })
    });
    // res.render('detail',{
    //     title:"电影详情页",
    //     movie:{
    //         director: '朱浩伟',
    //         country: '英语',
    //         title: '惊天魔盗团2',
    //         poster:'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=b1c06780be99a9012f3853647cfc611e/730e0cf3d7ca7bcba4b67cbbb8096b63f724a851.jpg',
    //         language: 'English',
    //         desc:'影讲述了杰西·艾森伯格、伍迪·哈里森、艾拉·菲舍尔、戴夫·弗兰科 四人所扮演的四位魔术师组成了一个叫做“四骑士(The Four Horsemen)”的新晋魔术师团队巡回表演，途中，四人如同现代“罗宾汉”一般智勇双全，高调作案，在现场观众眼皮下分别劫走了银行巨额资金劫富济贫。首先在团队成立一年时于拉斯维加斯远程抢劫了一间巴黎的信用社、此事惊动了FBI，FBI派出最优秀的干员迪兰（马克·鲁法洛饰）和国际刑警组织派来的美女警员阿尔玛（梅拉尼·罗兰饰）携手对四人进行审问，审问后却将他们释放了。两人请教以揭露魔术幻局扬名的萨迪厄斯（摩根·弗里曼饰）指点破案，此时四骑士团在新奥尔良再次表演并给他们的投资商特雷斯勒（迈克尔·凯恩饰）开了一个巨大的玩笑。FBI决定追捕他们，在追捕过程中Jack Wilder“牺牲”，最后剩下三名骑士在纽约进行谢幕表演，这时迪兰的助手发现最后这次表演散发的钱并不是真钱。萨迪厄斯似乎发现了真相，而且他发现了真钱藏身之处，不过他却没料到，这一切竟是迪兰的谋划，迪兰是要他在监狱里度过余生。而且这时，迪兰和阿尔玛之间的关系也发生了微妙的变化。'
    //     }
    // })
})
app.get('/detail',function (req,res) {
    //render 调用views下面 jade文件
    res.render('detail',{
        title:'movie 详情页'
    })
});
app.get('/admin',function (req,res) {
    //render 调用views下面 jade文件
    res.render('admin',{
        title:'movie 后台首页'
    })
});
app.get('/admin/movie',function (req,res) {
    //render 调用views下面 jade文件
    res.render('admin',{
        title:'movie 后台录入',
        movie:{
            title:'',
            director:'',
            country:'',
            poster:'',
            desc:'',
            language:'',
            year:'',
            flash:''
        }
    })
});


//admin update
app.get('/admin/update/:id',function (req,res) {
    var id = req.params.id;

    if(id) {
        Movie.findById(id,function (err,movie) {
            res.render('admin',{
                title: '电影后台更新页',
                movie:movie
            });
        });
    }
});


//admin delete
app.delete('/admin/list',function (req,res) {
    var id = req.query.id;

    if(id) {
        Movie.remove({_id:id},function (err,movie) {
            if(err) {
                console.log(err)
            } else {
                res.json({success:1})
            }
        })
    }
});

//admin post

app.post('/admin/movie/add',function (req,res) {
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;

    if(id !== 'undefined') {
        Movie.findById(id,function (err,movie) {
            if(err){
                console.log(err);
            }
            _movie = _.extend(movie,movieObj)
            _movie.save(function (err,movie) {
                if(err){
                    console.log(err);
                }

                res.redirect('/movie/'+movie._id);
            })
        })
    } else {
        _movie = new Movie({
            director: movieObj.director,
            title: movieObj.title,
            language: movieObj.language,
            country: movieObj.country,
            flash:movieObj.flash,
            poster:movieObj.poster,
            year:movieObj.year,
            desc:movieObj.desc,
        });
        _movie.save(function (err,movie) {
            if(err){
                console.log(err);
            }
            res.redirect('/movie/'+movie._id);
        });
    }

})