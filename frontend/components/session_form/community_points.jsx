import React from 'react';

const CommunityPoints = () => {
    return (
        <div className="community-blurb">

            <h1 className="community-title">Join the Stack Overwhelm community</h1>
            <div className="community-point-container">
                <div className="community-point">
                    <div className="community-image-container">
                        <img className="community-image" src="/images/question.svg" />
                    </div>
                    <div className="point-text">
                        Get unstuck — ask a question
                    </div>
                </div>
                <div className="community-point">
                    <div className="community-image-container">
                        <img className="community-image" src="/images/unlockupvote.svg" />
                    </div>
                    <div className="point-text">
                        Unlock new privileges like voting and commenting
                    </div>
                </div>
                <div className="community-point">
                    <div className="community-image-container">
                        <img className="community-image" src="/images/tag.svg" />
                    </div>
                    <div className="point-text">
                        Save your favorite tags and filters
                    </div>
                </div>
                <div className="community-subpoint">
                    <div className="subpoint-text">
                        Use the power of Stack Overwhelm inside your organization.
                    </div>
                </div>
            </div>

        </div>
    )
};


export default CommunityPoints;