# Jollygood Companions — Website Launch Guide

**Site:** jollygoodcompanions.com  
**Host:** GitHub Pages (free)  
**Form:** Web3Forms (free — 250 submissions/month)  
**Email:** Microsoft 365 (stays untouched throughout)

---

## Timeline Overview

| Step | Task | Time Required |
|------|------|--------------|
| 1 | Set up Web3Forms contact form | ~15 minutes |
| 2 | Create GitHub account + repository | ~20 minutes |
| 3 | Push files + enable GitHub Pages | ~10 minutes |
| 4 | Transfer domain Squarespace → Porkbun | **5–7 days** (ICANN wait) |
| 5 | Configure DNS at Porkbun | ~15 minutes |
| 6 | Connect custom domain on GitHub Pages | ~5 minutes |
| 7 | Final testing checklist | ~20 minutes |
| 8 | Cancel Squarespace | ~5 minutes |

**Total calendar time: ~1 week** (the 5–7 day domain transfer is the only wait)

---

## Zoom Call Schedule

You'll need **two Zoom calls** with Angel total. Here's what to cover on each:

### 📞 Call 1 — "Launch Setup" (~75–90 minutes)
Schedule this when Angel has ~90 minutes and access to:
- His **email inbox** (to receive API key + confirmation emails)
- His **Squarespace login** (domain admin panel)
- A **credit card** (~$10–12 for the Porkbun domain transfer fee)

**Covers:** Steps 1, 2, 3, 4, and 5 (Parts A + B)

- [ ] Get Web3Forms API key (Angel enters his email at web3forms.com, checks inbox)
- [ ] Create GitHub account (Angel signs up + verifies email)
- [ ] Enable GitHub Pages (Angel clicks through GitHub settings)
- [ ] Unlock domain + get auth code at Squarespace
- [ ] Create Porkbun account + initiate domain transfer (Angel pays ~$10–12)
- After the call: Remind Angel to check his email and click the Squarespace transfer approval link

> **Then wait 5–7 days for the domain transfer to complete.** Porkbun emails Angel when it's done.

---

### 📞 Call 2 — "Go Live" (~45–60 minutes)
Schedule this **after Porkbun confirms the transfer is complete.** Angel needs:
- His **Porkbun login**
- His **GitHub login**

**Covers:** Steps 5 (Part C), 6, 7, 8, and 9

- [ ] Configure DNS at Porkbun (add GitHub Pages A records)
- [ ] Connect custom domain in GitHub Pages settings
- [ ] Test the live site together
- [ ] Cancel Squarespace (Angel's billing)

---

## Step 1 — Set Up Web3Forms (do this first)

The contact form is already wired up in the code — you just need to insert your free API key.

> ### 📞 ZOOM WITH ANGEL REQUIRED
> Angel must enter his own email and check his inbox for the API key. Do this at the start of Call 1.

1. Go to **https://web3forms.com**
2. **Angel enters** `angelsalcedo@jollygoodcompanions.com` and clicks **"Create your access key"**
3. **Angel checks his inbox** — copy the API key they send (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
4. **Developer:** Open `contact.html` in a text editor
5. Find this line:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
   ```
6. Replace `YOUR_WEB3FORMS_KEY` with Angel's actual key and save the file

> **Test later:** After the site is live, submit the contact form yourself and confirm Angel receives the email at his inbox.

---

## Step 2 — Create a GitHub Account & Repository

GitHub hosts the website for free using GitHub Pages.

> ### 📞 ZOOM WITH ANGEL REQUIRED
> Angel needs to sign up for a GitHub account using his own email. Do this during Call 1.

1. **Angel goes to** **https://github.com** and signs up for a free account
   - Username suggestion: `angelsalcedo` or `jollygoodcompanions`
   - Can use a personal email he checks regularly (doesn't have to be the business email)
   - **Angel verifies his email** — GitHub sends a confirmation link

2. **Developer:** Once Angel is logged in, click **"New repository"** (green button, top left)
   - Repository name: `jg-companions-website`
   - Visibility: **Public** ← *required for free GitHub Pages*
   - Do NOT check "Add a README" (we already have files)
   - Click **"Create repository"**

3. GitHub will show you setup commands. You'll run these in the next step.

---

## Step 3 — Push the Website Files to GitHub

> ### 💻 DEVELOPER: Do this independently — no call needed
> You run these commands from your own machine. Angel doesn't need to be present.

Open **Terminal** (Mac) and run these commands one at a time:

```bash
# Navigate to the project folder
cd "/Users/dillonbond/Documents/Angel Files (Desktop)/JollyGood Companions/jg_companions_website_rebuild"

# Initialize git (only needed once)
git init
git add .
git commit -m "Initial website launch"
git branch -M main

# Connect to your GitHub repo (replace YOUR-USERNAME with Angel's GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/jg-companions-website.git

# Push the files
git push -u origin main
```

4. Refresh the GitHub repository page — you should see all the files listed

**Verify the CNAME file** contains exactly one line:
```
jollygoodcompanions.com
```

---

## Step 4 — Enable GitHub Pages

> ### 📞 ZOOM WITH ANGEL REQUIRED
> Requires Angel to be logged into GitHub. Do this during Call 1 (right after Step 3 — you push, then Angel configures Pages while you're both on the call).

1. **Angel logs into** his GitHub account at github.com
2. Navigate to the `jg-companions-website` repository
3. Click **Settings** (top navigation)
4. Click **Pages** in the left sidebar
5. Under **"Build and deployment"** → Source: **Deploy from a branch**
6. Branch: `main` | Folder: `/ (root)` → click **Save**
7. Wait 1–2 minutes, then click the link that appears:  
   `https://YOUR-USERNAME.github.io/jg-companions-website/`

**Test the staging URL thoroughly before touching any DNS:**
- All 7 pages load (Home, Services, Team, Testimonials, Partners, Contact, Privacy Policy)
- Navigation works on mobile
- Contact form displays correctly
- Images and logo appear

> The site will look correct at this staging URL. Custom domain connection comes in Step 6.

---

## Step 5 — Transfer Domain from Squarespace to Porkbun

> ⚠️ **Do NOT cancel Squarespace yet.** The old site stays live during the transfer — Angel's clients see no interruption.

### Part A: Unlock the domain at Squarespace

> ### 📞 ZOOM WITH ANGEL REQUIRED
> Angel must be logged into his Squarespace account. Do this during Call 1.

1. **Angel logs into** **Squarespace** → clicks his profile → **Domains**
2. Click on `jollygoodcompanions.com`
3. Click **"Transfer domain away from Squarespace"** (or look for "Transfer Lock" → toggle off)
4. Squarespace will email Angel an **Authorization Code (EPP code)** — copy it when it arrives

### Part B: Start the transfer at Porkbun

> ### 📞 ZOOM WITH ANGEL REQUIRED
> Angel creates a Porkbun account and pays the transfer fee (~$10–12). Do this during Call 1.

1. **Angel creates** a free account at **https://porkbun.com**
2. Click **Transfers** → **Transfer a Domain In**
3. Enter `jollygoodcompanions.com`
4. When prompted, paste the Authorization Code from Squarespace
5. Complete checkout — transfer fee is typically **$9–12** and includes 1 extra year of registration

### Part C: Approve and wait

> ### ⚠️ ANGEL DOES THIS ON HIS OWN (after Call 1)
> Remind Angel before you hang up: he'll receive a confirmation email from Squarespace and needs to click "Approve" to speed up the transfer.

1. Angel checks his email — he'll get a confirmation email from Squarespace. **Click "Approve"** to speed up the transfer (otherwise it auto-approves after 5 days)
2. Also accept any confirmation email from Porkbun
3. Wait **5–7 days** for ICANN to finalize the transfer
4. Porkbun will email Angel when the transfer is complete — **that's your signal to schedule Call 2**

---

## Step 6 — Configure DNS at Porkbun

> ⚠️ **Critical: Do NOT delete existing Microsoft 365 records.** Only ADD the new GitHub Pages records.

> ### 📞 ZOOM WITH ANGEL REQUIRED
> Angel must be logged into his Porkbun account. Do this at the start of Call 2.

Once the transfer is complete, **Angel logs into** Porkbun → DNS for `jollygoodcompanions.com`.

### ADD these records (GitHub Pages web hosting):

| Type | Host | Value | TTL |
|------|------|-------|-----|
| `A` | `@` | `185.199.108.153` | 600 |
| `A` | `@` | `185.199.109.153` | 600 |
| `A` | `@` | `185.199.110.153` | 600 |
| `A` | `@` | `185.199.111.153` | 600 |
| `CNAME` | `www` | `YOUR-USERNAME.github.io` | 600 |

*(Replace `YOUR-USERNAME` with Angel's actual GitHub username)*

### LEAVE ALONE — Microsoft 365 email records:

| Type | What it looks like | Why it matters |
|------|-------------------|----------------|
| `MX` | `0 jollygoodcompanions-com.mail.protection.outlook.com` | Email delivery |
| `TXT` | Starts with `v=spf1 include:spf.protection.outlook.com` | Spam prevention |
| `CNAME` | `autodiscover` → `autodiscover.outlook.com` | Outlook auto-setup |

> If you're unsure which records came from Squarespace vs. Microsoft 365, **only delete records that say something like `198.185.159.x` or `198.49.23.x`** (those are Squarespace's old web server IPs). Everything else, leave it.

---

## Step 7 — Connect Custom Domain on GitHub Pages

> ### 📞 ZOOM WITH ANGEL REQUIRED
> Requires Angel's GitHub login. Do this during Call 2, right after configuring DNS.

1. **Angel logs into** GitHub → navigates to the `jg-companions-website` repo
2. Go to **Settings → Pages**
3. Under **"Custom domain"**, type `jollygoodcompanions.com` and click **Save**
4. GitHub runs a DNS check — it may show a yellow warning for up to 60 minutes while DNS propagates
5. Once it shows a green checkmark: check the box for **"Enforce HTTPS"**
6. Visit **https://jollygoodcompanions.com** — the new site should be live!

---

## Step 8 — Final Testing Checklist

> ### 📞 ZOOM WITH ANGEL REQUIRED (for email tests)
> You can test most items yourself, but Angel needs to check whether he **receives** the test form submission and test emails at his inbox.

Do all of these before canceling Squarespace:

**Website**
- [ ] https://jollygoodcompanions.com loads the home page
- [ ] https://www.jollygoodcompanions.com also works (www redirect)
- [ ] HTTPS padlock is green in the browser address bar
- [ ] All 7 pages load without errors: Home, Services, Team, Testimonials, Partners, Contact, Privacy Policy
- [ ] Mobile menu opens and closes correctly (test on a phone)
- [ ] "JollyGood Homes" link in nav opens the real estate site in a new tab
- [ ] Logo appears in the header and footer

**Contact Form**
- [ ] Fill out and submit the contact form on the website
- [ ] **Angel confirms** he received the submission email at `angelsalcedo@jollygoodcompanions.com`
- [ ] The email shows the name, phone, and message from the test submission

**Email (Microsoft 365)**
- [ ] Send a test email **to** `angelsalcedo@jollygoodcompanions.com` from a personal email — **Angel confirms** it arrives
- [ ] **Angel sends** a test email **from** `angelsalcedo@jollygoodcompanions.com` — it sends successfully
- [ ] Microsoft 365 / Outlook login still works normally

---

## Step 9 — Cancel Squarespace

> ### 📞 ZOOM WITH ANGEL REQUIRED
> This is Angel's billing account. Do this at the end of Call 2 once all checklist items are confirmed.

Only do this after:
- The new site has been live at `jollygoodcompanions.com` for **at least 48 hours** with no issues
- All checklist items above are checked off

**Steps:**
1. **Angel logs into** Squarespace
2. Go to **Settings → Billing & Account → Billing**
3. Click **"Cancel Plan"** and follow the prompts
4. Choose whether to keep or let expire any remaining subscription credit

> **Note:** Since the domain has already been transferred to Porkbun, canceling Squarespace will **not** affect the domain, website, or email. The domain is safely at Porkbun.

---

## Ongoing Maintenance

> ### 💻 DEVELOPER: All ongoing updates are independent — no client call needed

### Making website updates
```bash
# In Terminal, from the project folder:
git add .
git commit -m "Brief description of what changed"
git push
```
GitHub Pages automatically rebuilds and re-deploys within 1–2 minutes. No manual steps needed.

### Domain renewal
Porkbun will auto-renew `jollygoodcompanions.com` annually (currently ~$9–11/year).  
Set up **auto-renew** in Porkbun → Domains to avoid accidental expiration.

### Contact form submissions
Web3Forms sends each submission directly to Angel's email.  
Free tier: **250 submissions/month** — more than enough for a local care business.  
If volume grows, upgrade at https://web3forms.com/pricing (starts at $8/month for unlimited).

### SSL certificate
GitHub Pages automatically manages the free HTTPS certificate via Let's Encrypt. It renews itself every 90 days — no action needed.

---

## Quick Reference

| Service | URL | Purpose | Cost |
|---------|-----|---------|------|
| GitHub | github.com | Hosts the website files | Free |
| GitHub Pages | (automatic) | Serves the website | Free |
| Web3Forms | web3forms.com | Contact form submissions | Free (250/mo) |
| Porkbun | porkbun.com | Domain registration & DNS | ~$10/year |
| Microsoft 365 | (unchanged) | Business email | (existing plan) |

---

*Last updated: May 2025 — Dillon Bond / Databased Innovations*
