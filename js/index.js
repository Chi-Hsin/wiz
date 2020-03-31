var indexData = new Vue({
            el: '#outerDiv',
            data: {
                "screenHeight":"111",
                "screenWidth":"222",
                // "eventDiv":{
                //     "eventTitle":{
                //         // "width":"300px"
                //     },
                //     "eventArrow":{
                //         "margin":"auto"
                //     },
                //     "eventNumber":{
                //         "margin":"auto",
                //         "fontWeight":"bold"
                //     }
                //}
                 
               },
            methods:{
            },
            created() { //模板渲染前
                this.screenWidth = window.innerWidth;
                this.screenHeight = window.innerHeight;
            },
            mounted(){
                
                window.addEventListener('resize',function(){
                    indexData.screenWidth = window.innerWidth;
                    indexData.screenHeight = window.innerHeight;
                });
            },   
           })