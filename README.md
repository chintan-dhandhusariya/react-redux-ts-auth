## Dev Setup

- Install Node (v 16.x) and Yarn.
- Clone the repo on your local and install all dependencies with `yarn`.
- To run the app, run the command `yarn start`.

## Notes

1. The app consists of simply a login page that has a password field and a dashboard page that welcomes the user.
2. To log in, the correct password is `alohomora` while to see the incorrect password state, anything (or nothing) can be entered.
3. Upon clicking login, an async API behavior has been mimicked. So, it will take 1 second to login and until then, the button will be disabled.
4. The frontend validations have not been implemented, so it will mock async behaviour for empty password field as well.