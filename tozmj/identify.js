// JavaScript Document
        // 用户数据
        const users = [
            { username: "赵萌洁", password: "141081200708180024", redirectUrl: "./gift.html"},
            { username: "ysk", password: "1", redirectUrl: "./gift.html" }
        ];

        function validate() {
            const enteredUsername = document.getElementById('username').value;
            const enteredPassword = document.getElementById('password').value;

            let matchedUser;

            // 遍历用户数据来查找匹配项
            for (const user of users) {
                if (user.username === enteredUsername && user.password === enteredPassword) {
                    matchedUser = user;
                    break;
                }
            }
		function myMessage() {
			window.location.href = matchedUser.redirectUrl;
			}
            if (matchedUser) {
				swal("哇塞！恭喜你验证通过了！请先阅读完下方文本。","请耐心等待15s，即将跳转到下一网页。请确认周您处于安全适宜的场合。若您所处的场合不适合，请退出该网页。等场合合适再回头查看该网页。如果周边有其他人，请注意表情管理。网页中可能含有不适合旁人观看的内容。还请放心，网页中将不会出现声音或音乐","success")
				setTimeout(myMessage, 15000);
                 // 密码正确，根据用户名跳转到相应的网页
            } else {
                swal("验证失败","姓名或ID错误!","error");
            }
        }