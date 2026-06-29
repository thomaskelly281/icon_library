import { mdiTwoFactorAuthentication } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TwoFactorAuthentication(props: IconComponentProps) {
  return <Icon path={mdiTwoFactorAuthentication} {...props} />;
}

export { mdiTwoFactorAuthentication as path };
