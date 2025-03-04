import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    TypographyP,
    TypographyLead,
    TypographyMuted,
} from '@/components/ui/typography'
import { JSX } from 'react'

export default function Page(): JSX.Element {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
            <Card className="w-full max-w-2xl">
                <CardHeader className="text-center">
                    <Badge className="mb-4 self-center">shadcn/ui</Badge>
                    <CardTitle className="text-4xl">Hello World</CardTitle>
                    <CardDescription>
                        A simple page built with Next.js and shadcn/ui
                        components
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <TypographyLead>
                        Welcome to this example page!
                    </TypographyLead>
                    <TypographyP>
                        This page demonstrates the use of various shadcn/ui
                        components including Cards, Typography, Badges, and
                        Buttons.
                    </TypographyP>
                    <TypographyP>
                        shadcn/ui provides a set of accessible, reusable, and
                        customizable components that make building websites
                        easier and faster.
                    </TypographyP>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Learn More</Button>
                    <Button>Get Started</Button>
                </CardFooter>
            </Card>
            <TypographyMuted className="mt-8">
                Built with Next.js and shadcn/ui
            </TypographyMuted>
        </div>
    )
}
