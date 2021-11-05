import { h, render, Component } from 'preact';
import '../src/index';
import { modal, modalAlert, modalConfirm, modalPrompt } from '../src';

const users = [
    { id: '1', name: 'Jan Kowalski' },
    { id: '2', name: 'John Smith' }
];


async function searchForUsers(searchPhrase) {
    return users.filter(user => {
        return user.name.includes(searchPhrase);
    });
}

const article = {
    id: 'abc',
    title: 'aaa',
    userId: '1'
};

async function getUser(userId) {
    return users.find(usr => usr.id === userId);
}

function setUser(selectedUser) {
    article.userId = selectedUser.id;
}

class Main extends Component {
    async componentWillMount() {
        const user = await getUser(article.userId);
        this.setState({ initialUser: user });
    }

    render() {
        return (
            <>
                <sw-select config={{
                    name: 'test',
                    sourceFn: searchForUsers,
                    labelField: 'name',
                    initialOptions: [this.state.initialUser],
                    minimumCharLengthTrigger: 2
                }} onchange={setUser} />

                <h2 style="cursor: pointer" onClick={async () => {
                    const a = await modal({
                        header: ({ close }) => <h2 onClick={async () => {
                            const c = await modal({
                                header: ({ close }) => 'Welcomessssss',
                                body: ({ close }) => <p>Welcome one our website</p>,
                                footer: ({ close }) => <sw-button onClick={() => close('modal c')}>OK</sw-button>,
                            });
                            console.log(c);
                        }} className="test">Welcome CLICK!</h2>,
                        body: ({ close }) => <div className="test2">Welcome one our website
                            <div>TEST</div>
                        </div>,
                        footer: ({ close }) => <sw-button onClick={() => close('modal a')}>OK</sw-button>,
                        large: true,
                    });

                    const b = await modal({
                        header: <h2>Next</h2>,
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse labore laborum non nostrum quidem quisquam suscipit ullam, voluptatem. Eligendi et explicabo inventore porro provident repellendus sit. Accusantium alias beatae blanditiis consequatur dolorem doloremque, dolores ducimus et eum fuga labore officiis pariatur quasi qui quod quos rem repudiandae velit, vitae?',
                        footer: ({ close }) => <sw-button onClick={() => close('modal b')}>OK</sw-button>,
                        large: false,
                    });

                    console.log(a, b);
                }}>Click HERE!!!</h2>


                <h3 style="cursor: pointer" onClick={async () => {
                    const alert = await modalAlert({
                        title: 'Danger!',
                        text: 'You are not allowed to view this content!',
                        buttonLabel: 'OK',
                        icon: 'cross'
                    });

                    console.log(alert);
                }}>Modal Alert CLICK ME!</h3>


                <h3 style="cursor: pointer" onClick={async () => {
                    const name = await modalPrompt({
                        title: 'Please answer',
                        text: 'Please enter your name',
                        placeholder: 'name',
                        initialValue: '',
                        icon: 'user'
                    });

                    console.log(name);
                }}>Modal Prompt CLICK ME!</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio, excepturi iste nostrum
                    odit quibusdam quisquam sunt tempore ullam voluptates. Aperiam commodi debitis doloremque, error et
                    hic in mollitia nemo numquam rem, tempora ut vel? Debitis dolorem excepturi illo non odit provident
                    quas rerum, tempore voluptatibus! Alias animi aut blanditiis consequuntur culpa debitis delectus
                    deleniti dignissimos dolor dolores eius eligendi enim et, exercitationem illum in ipsa iusto laborum
                    molestias, necessitatibus neque nisi nobis obcaecati pariatur porro praesentium quam quas quisquam
                    repellendus saepe sit soluta sunt unde vel vero voluptatem voluptates. Amet aperiam autem
                    consectetur cum cumque doloremque eius eos error facilis hic illum ipsum, iure laboriosam molestiae
                    natus nisi numquam odit optio perspiciatis praesentium quis quos recusandae reiciendis sunt tenetur
                    ullam, vitae! Aspernatur, deserunt distinctio doloremque et facere fuga fugiat in inventore iste
                    itaque nihil placeat possimus reiciendis totam veritatis. Ad aut consequatur delectus distinctio
                    dolor dolorem est eum eveniet fugiat harum illo, maiores minima mollitia quam, quos. Cupiditate esse
                    id pariatur ullam. Alias eum nemo nobis, quod quos similique sit. Alias animi delectus doloremque
                    ducimus, error, est, facilis fugit laborum laudantium natus nihil omnis praesentium quidem sunt
                    ullam! A, ad deserunt dolorum ea exercitationem </p>
                <sw-select config={{
                    name: 'lalalaA',
                    initialOptions: ['quisquam sapiente veritatis. Aliquid explicabo id molestiae quaerat repellendus ullam',
                        'dwa', 'trzy', 'cztery', 'dwa', 'trzy', 'cztery']
                }} />
                <sw-select config={{
                    name: 'lalalaA',
                    initialOptions: ['quisquam sapiente veritatis. Aliquid explicabo id molestiae quaerat repellendus ullam',
                        'dwa', 'trzy', 'cztery', 'dwa', 'trzy', 'cztery']
                }} />
                <sw-select config={{
                    name: 'lalalaA',
                    initialOptions: ['quisquam sapiente veritatis. Aliquid explicabo id molestiae quaerat repellendus ullam',
                        'dwa', 'trzy', 'cztery', 'dwa', 'trzy', 'cztery']
                }} />
                <p>in laudantium officia quam, quas quasi quidem, sequi
                    vero. Alias animi aperiam consectetur distinctio dolore ea eligendi fugiat itaque magnam maxime
                    neque nobis, perferendis, porro quaerat quam repellat, repellendus repudiandae saepe tempore
                    temporibus ullam veniam voluptatum? Accusamus aliquid consequuntur cupiditate dicta doloremque
                    dolores dolorum eaque esse eveniet excepturi facere facilis fuga in laborum magnam maiores minima
                    modi nostrum, obcaecati odio omnis quas repellendus reprehenderit sit soluta tenetur voluptatum?
                    Aliquid atque aut autem culpa dignissimos doloremque ea eligendi exercitationem illum iusto maiores
                    maxime minus modi molestias neque, nisi pariatur perferendis placeat, ratione repudiandae vel,
                    voluptatem voluptatum. Adipisci assumenda dignissimos eaque eius, esse excepturi illo itaque libero,
                    molestias nihil nulla perferendis perspiciatis quae, quas quo quod recusandae reiciendis repudiandae
                    sed ut! Dignissimos doloremque fugit repellat sapiente tempore. Aliquid at cumque enim error eum,
                    excepturi explicabo in libero minima nostrum, odit perferendis porro. Aliquam assumenda beatae
                    dolore doloribus eligendi, excepturi facilis, iste libero molestias neque pariatur placeat quidem?
                    Ad aperiam dignissimos eligendi, esse, excepturi explicabo itaque molestias nemo sapiente temporibus
                    ullam vero? Ad animi cupiditate dolorem ea eligendi, est minus nisi odio pariatur qui? Aliquam
                    beatae commodi consequatur culpa dicta distinctio ducimus error est, in iste libero obcaecati,
                    omnis, pariatur reiciendis totam! Aliquam architecto dicta doloribus ea eaque error eum eveniet
                    expedita, harum itaque molestiae numquam perspiciatis, provident quas quidem ullam voluptates.
                    Aspernatur molestiae natus obcaecati saepe sapiente. Ad ea fugit natus quod, quos rem ut voluptatum!
                    Consectetur dicta est ex minus nemo numquam qui quis quo sit unde. Aliquam, consectetur
                    consequuntur, cupiditate deserunt dignissimos dolore exercitationem impedit iste laboriosam laborum
                    magni maxime nam non obcaecati officia optio placeat quibusdam quidem sed tempore temporibus vitae
                    voluptates? Adipisci animi consequatur culpa cumque id, illo ipsa non praesentium qui sapiente ullam
                    veritatis vitae voluptatum? Accusantium aperiam aut autem corporis cum delectus dignissimos eaque
                    ex, excepturi id ipsam laborum maxime molestias mollitia natus necessitatibus odit perferendis
                    placeat porro provident quaerat repudiandae, totam voluptate voluptatem voluptatum? Corporis quaerat
                    quisquam sed. Alias earum nemo, nisi quod similique tempora unde veniam! Ab aliquam amet asperiores
                    cumque deleniti earum, eius eum expedita facilis impedit, inventore nihil omnis, porro qui sed
                    voluptate voluptatum. Animi commodi consectetur eos ipsam magni qui reiciendis sit vitae?
                </p>

                <select>
                    <option>aaa</option>
                    <option>aaa</option>
                    <option>aaa</option>
                </select>
                <sw-select config={{
                    name: 'BBBBBB',
                    initialOptions: ['quisquam sapiente veritatis. Aliquid explicabo id molestiae quaerat repellendus ullam',
                        'dwa', 'trzy', 'cztery', 'dwa', 'trzy', 'cztery']
                }} />
                <h3 style="cursor: pointer" onClick={async () => {
                    const userAccepted = await modalConfirm({
                        title: 'License',
                        text: 'Do you accept the license?',
                        okLabel: 'Yes',
                        cancelLabel: 'No',
                        icon: 'question-mark'
                    });

                    console.log(userAccepted);
                }}>Modal Confirm CLICK ME!</h3>
            </>
        );
    }
}

render(h(Main), document.body);
