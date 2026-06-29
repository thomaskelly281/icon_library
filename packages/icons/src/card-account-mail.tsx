import { mdiCardAccountMail } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardAccountMail(props: IconComponentProps) {
  return <Icon path={mdiCardAccountMail} {...props} />;
}

export { mdiCardAccountMail as path };
