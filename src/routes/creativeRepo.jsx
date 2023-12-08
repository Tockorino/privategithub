import React from 'react';

const CreativeRepo = () => {
    return(
        <div>
            <section>
                <form>
                    <div className="inputbox">
                        <input type="text" required />
                        <label>Collaborateur 1</label>
                    </div>
                    <button>Valider</button>
                </form>
            </section>
        </div>
    );
};

export default CreativeRepo;