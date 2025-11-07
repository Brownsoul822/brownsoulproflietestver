
function calculateAge() {
 
    const birthDate = new Date(2006, 7, 22); 
    

    const currentDate = new Date();
    
  
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    
    if (currentMonth < birthMonth || 
        (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    // show age
    document.getElementById('textdetail').innerHTML = 'aka.東九龍天子 ' + age + ' 歲';
   document.getElementById('textdetail2').innerHTML = '全平台同名';
    
    // cal 
    let nextBirthday = new Date(currentDate.getFullYear(), birthMonth, birthDay);
    if (currentDate > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    
    const daysUntilNextBirthday = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));
    const daysLived = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
    
    document.getElementById('ageDetails').innerHTML = 
        `在地球已經存在了 <strong>${daysLived.toLocaleString()}</strong> 天<br>
          距離下一個生日還有<strong>${daysUntilNextBirthday}</strong> 天`;
    
    
    
}



// 鼠标追踪效果
function initAvatarEffect() {
    const avatar = document.getElementById('avatar');
    const avatarImg = avatar.querySelector('img');
    
    avatar.addEventListener('mousemove', (e) => {
        const rect = avatar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // 计算相对于中心的偏移量
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetX = ((x - centerX) / centerX) * 80; // 增加偏移量到15px
        const offsetY = ((y - centerY) / centerY) * 80;
        
        // 应用偏移效果到图片
        avatarImg.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.3)`;
    });
    
    avatar.addEventListener('mouseleave', () => {
        // 鼠标离开时恢复原状
        avatarImg.style.transform = 'translate(0, 0) scale(1)';
    });
}

// 在DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    calculateAge();
    initAvatarEffect();
});



setInterval(calculateAge, 24 * 60 * 60 * 1000);