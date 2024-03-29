import Link from "next/link";

function WorkHome() {
  return (
    <div className="flex flex-row justify-center items-center m-10">
      <div className="h-30 hover:bg-rose-50 transition duration-500 hover:scale-105 hover:shadow-2xl w-72 m-10 p-10 rounded-xl shadow-xl shadow-gray-400 border-4 border-white border-t-rose-500 cursor-pointer">
        <Link href="/questions/subject/english">
          <div>
            <h2 className="font-extrabold text-2xl text-gray-600 pb-2">
              English
            </h2>
            <p className="text-zinc-500 font-semibold">
              English is a study of literature, media and language in which
              students critically and creatively engage with a variety of texts
              in all language modes.
            </p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="h-30 hover:shadow-2xl w-72 m-10 p-10 rounded-xl shadow-xl shadow-gray-400 border-4  border-t-lime-500 cursor-pointer hover:bg-lime-50 transition duration-500 hover:scale-105">
          <Link href="/questions/subject/maths">
            <div>
              <h2 className="font-extrabold text-2xl text-gray-600 pb-2">
                Maths
              </h2>
              <p className="text-zinc-500 font-semibold">
                Mathematics is an area of knowledge, which includes the study of
                such topics arithmetic and number theory, algebra, geometry
              </p>
            </div>
          </Link>
        </div>
        <div className="h-30 hover:bg-teal-50 transition duration-500 hover:scale-105 hover:shadow-2xl w-72 m-10 p-10 rounded-xl shadow-xl shadow-gray-400 border-4  border-t-teal-600   cursor-pointer">
          <Link href="/questions/subject/social_science">
            <div>
              <h2 className="font-extrabold text-2xl text-gray-600 pb-2">
                Social Science
              </h2>
              <p className="text-zinc-500 font-semibold">
                Social science is the branch of science devoted to the study of
                societies and the relationships among individuals within those
                societies
              </p>
            </div>
          </Link>
        </div>
        <div className="h-30 hover:bg-blue-50 transition duration-500 hover:scale-105 hover:shadow-2xl w-72 m-10 p-10 rounded-xl shadow-xl shadow-gray-400 border-4 border-t-blue-600   cursor-pointer">
          <Link href="/questions/subject/hindi">
            <div>
              <h2 className="font-extrabold text-2xl text-gray-600 pb-2">
                Hindi
              </h2>
              <p className="text-zinc-500 font-semibold">
                हिन्दी हिन्दी पट्टी की भाषा है। यह कुछ हद तक, भारत के अन्य
                हिस्सों में भी बोली जाती है (आमतौर पर सरलीकृत या पिजिनाइज्ड
                किस्म जैसे बाजार हिंदुस्तानी या हाफलोंग हिंदी)।
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="h-30 hover:bg-orange-50 transition duration-500 hover:scale-105 hover:shadow-2xl w-72 m-10 p-10 rounded-xl shadow-xl shadow-gray-400 border-4 border-white border-t-orange-600   cursor-pointer">
        <Link href="/questions/subject/science">
          <div>
            <h2 className="font-extrabold text-2xl text-gray-600 pb-2">
              Science
            </h2>
            <p className="text-zinc-500 font-semibold">
              The intellectual and practical activity encompassing the
              systematic study of the structure and behaviour of the physical
              and natural world through observation and experiment.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WorkHome;
