import { mdiCardAccountDetails } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardAccountDetails(props: IconComponentProps) {
  return <Icon path={mdiCardAccountDetails} {...props} />;
}

export { mdiCardAccountDetails as path };
