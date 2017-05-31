/*
This class models a custom button on the footer
*/
export class CustomButton {
    public LinKRef : string;
    public ImgRef : string;
    public Alt : string;
    public Height : number;
    public Width : number;
    public Classes : string;

    /**
     * Gets the custom buttons for the footer
     * TODO: Obtain this data from a service instead
     */
    public static getCustomButtons() : Array<CustomButton> {
        return [
            {
                LinKRef: "https://public.tableau.com/profile/hugo.belin",
                ImgRef: "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/tableau.png",
                Alt: "Tableau Public",
                Height: 20,
                Width: 20,
                Classes: ""
            },
            {
                LinKRef: "https://account.xbox.com/en-us/Profile?gamerTag=hobelinm84",
                ImgRef: "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/xbox.png",
                Alt: "Xbox Profile",
                Height: 20,
                Width: 20,
                Classes: ""
            },
            {
                LinKRef: "https://psnprofiles.com/HugoBelin",
                ImgRef: "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/psn.png",
                Alt: "PlayStation Network",
                Height: 20,
                Width: 20,
                Classes: "background-color-white"
            },
            {
                LinKRef: "https://www.facebook.com/hobelinm/posts/10155401341918522?notif_t=like&notif_id=1496250132407465",
                ImgRef: "https://belino.blob.core.windows.net/hugobelinpublic/assets/img/nintendo.png",
                Alt: "Friend Code",
                Height: 20,
                Width: 20,
                Classes: ""
            }
        ];
    }
}
