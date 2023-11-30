function Card(props){
    return(
        <div
      class="card rounded-xl w-72 bg-white shadow-xl flex justify-start items-center gap-2 flex-col overflow-hidden"
    >
      <div class="w-full h-40 bg-sky-600 flex p-4 justify-center items-center">
        <img
          src={props.person.imgSrc}
          alt=""
          class="aspect-square rounded-full h-full object-cover"
        />
      </div>
      <div
        class="text-content p-2 w-full flex text-center flex-col gap-2 justify-center items-center"
      >
        <h1 class="text-2xl font-bold">{props.person.fullName}</h1>
        <p class="text-gray-500">
          {props.person.bio}
        </p>
        <button
          class="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md shadow-md"
        >
          <a href="#" class="">View Profile</a>
        </button>
      </div>
    </div>
    );
}

export default Card;