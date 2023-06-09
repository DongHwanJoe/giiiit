# 최신 node 이미지로 부터 시작
FROM node

# Working Directory 지정
# 도커 컨테이너의 작업폴더를 지정
WORKDIR /

# COPY package.json ./
# 앞의 ./는 HOST OS의 현재 폴더를 의미
# 뒤의 ./는 컨테이너의 현재 폴더(WORKDIR)를 의미
# 즉 외부에서 만들어둔 package.json 파일을 컨테이너 내부로 복사하겠다는 의미
COPY ./ ./

# node의 종속성 다운로드
# RUN 명령어는 컨테이너에서 실행
RUN npm install

# 안해도 되지만, 하는게 좋습니다.
# 이 컨테이너는 8080 포트를 사용한다는 의미 입니다.
EXPOSE 3000

# docker run 명령에서 실행항 명령이, 이 명령어 부터는 제작타임이 아닌 런타임에서 실행됨
CMD ["node", "app.js"]