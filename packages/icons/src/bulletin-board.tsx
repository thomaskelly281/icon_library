import { mdiBulletinBoard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BulletinBoard(props: IconComponentProps) {
  return <Icon path={mdiBulletinBoard} {...props} />;
}

export { mdiBulletinBoard as path };
