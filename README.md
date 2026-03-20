# Public Art Collections — publicartcollections.org

## What's included

```
artstream/
├── index.html        ← Homepage & gallery (main page)
├── shop.html         ← Shop prints, products & plans
├── streaming.html    ← TV streaming explainer
├── about.html        ← About page & art sources
├── account.html      ← Sign in / Create account
├── css/
│   └── style.css     ← All styling
└── js/
    ├── data.js       ← Art catalogue data
    └── gallery.js    ← Gallery filtering & modal logic
```

---

## How to get this live — step by step (no coding needed)

### Step 1: Create a GitHub account
1. Go to **github.com** and click "Sign up"
2. Choose a free plan
3. Verify your email

### Step 2: Create a new repository
1. Once signed in, click the **+** button top right → "New repository"
2. Name it: `publicartcollections`
3. Make it **Public**
4. Click "Create repository"

### Step 3: Upload your files
1. On your new repository page, click **"uploading an existing file"**
2. Drag ALL the files from this folder into the browser window
   - Make sure to include the `css/` and `js/` folders
3. Scroll down and click **"Commit changes"**

### Step 4: Deploy to Vercel (free hosting)
1. Go to **vercel.com** and click "Sign up"
2. Choose "Continue with GitHub" — sign in with your GitHub account
3. Click **"Add New Project"**
4. Find your `artstream` repository and click **"Import"**
5. Leave all settings as default and click **"Deploy"**
6. In about 60 seconds, your site will be live at a URL like:
   `https://publicartcollections.vercel.app`

### Step 5: Connect your own domain (optional)
If you buy a domain (e.g. `publicartcollections.org` from Namecheap ~$10/yr):
1. In Vercel, go to your project → Settings → Domains
2. Add your domain name
3. Follow Vercel's instructions to update your DNS settings

---

## Next steps to make it a real business

### Connect Printful (for real orders)
1. Create an account at **printful.com**
2. Go to Stores → Connect → "Manual order platform"
3. When a customer wants to buy, you create the order in Printful with their details
4. *Later: hire a developer to connect the Printful API so orders are automatic*

### Add real payment processing
- Sign up for **Stripe** (stripe.com) — free to sign up, they take ~2.9% per transaction
- A developer can add a Stripe checkout button to each artwork's shop page

### Connect real museum APIs (for real artwork images)
- **Met Museum API**: metmuseum.org/art/collection/api — completely free, no key needed
- **Rijksmuseum API**: data.rijksmuseum.nl — free API key
- **Art Institute of Chicago**: api.artic.edu — completely free
- A developer can replace the emoji placeholders with real high-resolution artwork images

### Add the streaming app
- The streaming display can be built as a simple web page that runs full-screen
- Any smart TV browser can open it
- Same QR code system applies

---

## Costs to run Public Art Collections

| Item | Cost |
|------|------|
| Vercel hosting | Free (upgrade ~$20/mo if big traffic) |
| Domain name | ~$10–15/year |
| Printful | Free to set up, they charge per order |
| Stripe payments | Free + 2.9% per transaction |
| Museum APIs | Free |
| **Total to start** | **~$10–15/year** |

---

## Questions?
Email: hello@publicartcollections.org (set this up once you have your domain)
